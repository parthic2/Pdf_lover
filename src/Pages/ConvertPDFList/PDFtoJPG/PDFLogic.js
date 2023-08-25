import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getPdfToJpgApi } from "../../../Redux/Action/Pages/PDFToJPGAction";
import axios from "axios";

const usePDFLogic = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [fileList, setFileList] = useState([]);
  const [sidebar, setSidebar] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isMerging, setIsMerging] = useState(false);
  const [error, setError] = useState(null);
  const files = [...fileList];
  const pageNumber = 1;

  const PtoJData = useSelector((state) => state.PDFtoJPGReducer.PtoJData);

  useEffect(() => {
    document.title = "Convert PDF to JPG.";
    dispatch(getPdfToJpgApi());
    const delay = 2000;
    const timer = setTimeout(() => {
      setLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [dispatch]);

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

    setOpen(true);

    try {
      setIsMerging(true);
      setStatusMessage("Converting PDF to JPG Files..."); // Setting the status message
      setError(null); // Resetting error state

      const url = `${process.env.REACT_APP_API_URL}/public/api/pdf-to-images`;
      const response = await axios.post(url, formData, {
        "Content-Type": "multipart/form-data",
      });

      if (response.status === 200 && response.data.status) {
        setFileList(response.data);
        setStatusMessage("Success!");
        navigate("/Download_PDF", {
          state: {
            name: "PDF to JPG",
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
    files,
    pageNumber,
    open,
    fileList,
    loading,
    sidebar,
    PtoJData,
    handleFileChange,
    handleUploadClick,
    toggleCart,
    statusMessage,
    isMerging,
    error,
  };
}

export default usePDFLogic;