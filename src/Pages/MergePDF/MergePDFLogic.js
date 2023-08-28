import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMergeApi } from "../../Redux/Action/Pages/MergeAction";
import axios from "axios";

const useMergePDFLogic = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [fileList, setFileList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sidebar, setSidebar] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isMerging, setIsMerging] = useState(false);
  const [error, setError] = useState(null);
  const files = [...fileList];
  const pageNumber = 1;

  const mergeData = useSelector((state) => state.mergeReducer.mergeData);

  useEffect(() => {
    document.title = "Merge PDF files online.";
    dispatch(getMergeApi());
    const delay = 500;
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

  const handleUploadClick = async () => {
    if (!fileList || fileList.length < 2) {
      setError("Select pdf file");
      return;
    }

    const formData = new FormData();
    for (let i = 0; i < fileList.length; i++) {
      formData.append("files[]", fileList[i]);
    }
    
    setOpen(true);

    try {
      setIsMerging(true);
      setStatusMessage("Merging Files..."); // Setting the status message
      setError(null); // Resetting error state

      const url = `${process.env.REACT_APP_API_URL}/public/api/merge`;
      const response = await axios.post(url, formData, {
        "Content-Type": "multipart/form-data",
      });

      if (response.status === 200 && response.data.status) {
        setFileList(response.data);
        setStatusMessage("Success!");
        navigate("/Download_PDF", {
          state: {
            name: "Merge PDF",
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
    mergeData,
    handleFileChange,
    handleUploadClick,
    toggleCart,
    statusMessage,
    isMerging,
    error,
  };
};

export default useMergePDFLogic;
