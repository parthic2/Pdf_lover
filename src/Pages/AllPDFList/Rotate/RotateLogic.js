import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getRotateApi } from "../../../Redux/Action/Pages/RotatePDFAction";
import axios from "axios";

const useRotateLogic = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [fileList, setFileList] = useState([]);
  const [rotation, setRotation] = useState(0);
  const [sidebar, setSidebar] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isMerging, setIsMerging] = useState(false);
  const [error, setError] = useState(null);
  const files = [...fileList];
  const pageNumber = 1;

  const rotateData = useSelector((state) => state.rotateReducer.rotateData);

  useEffect(() => {
    document.title = "Rotate PDF files.";
    dispatch(getRotateApi());
    const delay = 2000;
    const timer = setTimeout(() => {
      setLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [dispatch]);

  const rotateRight = () => {
    if (rotation === 270) {
      setRotation(0);
    } else {
      setRotation(rotation + 90);
    }
  };

  const handleFileChange = (e) => {
    const fileList = e.target.files;
    const fileArray = Array.from(fileList);
    setFileList(fileArray);
  };

  // Upload File
  const handleUploadClick = async () => {
    if (!fileList) {
      return;
    }

    const formData = new FormData();
    for (let i = 0; i < fileList.length; i++) {
      formData.append("file", fileList[i]);
    }
    formData.append("degree", rotation);

    setOpen(true);

    try {
      setIsMerging(true);
      setStatusMessage("Rotating Files...");
      setError(null);

      const url = `${process.env.REACT_APP_API_URL}/public/api/rotate-pdf`;
      const response = await axios.post(url, formData, {
        "Content-Type": "multipart/form-data",
      });

      if (response.status === 200 && response.data.status) {
        setFileList(response.data);
        setStatusMessage("Success!");
        navigate("/Download_PDF", {
          state: {
            name: "Rotate PDF",
            file: response.data.data.file
          },
        });
      } else {
        setOpen(false);
        setError(response.data.msg || "An error occurred");
      }
    } catch (error) {
      setError("Something Went Wrong!");
      setTimeout(() => {
        setOpen(false);
      }, 2000);
    }
  };

  // For Sidebar
  const toggleCart = () => {
    setSidebar(!sidebar);
  };

  return {
    rotateRight,
    rotation,
    files,
    pageNumber,
    open,
    fileList,
    loading,
    sidebar,
    rotateData,
    handleFileChange,
    handleUploadClick,
    toggleCart,
    statusMessage,
    isMerging,
    error,
  };
}

export default useRotateLogic;