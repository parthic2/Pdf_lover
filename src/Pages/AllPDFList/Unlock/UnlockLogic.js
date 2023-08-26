import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUnlockApi } from "../../../Redux/Action/Pages/UnlockPDFAction";
import axios from "axios";

const useUnlockLogic = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [fileList, setFileList] = useState([]);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [sidebar, setSidebar] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isMerging, setIsMerging] = useState(false);
  const [error, setError] = useState(null);
  const files = [...fileList];
  const pageNumber = 1;

  const unlockData = useSelector((state) => state.unlockReducer.unlockData);

  useEffect(() => {
    document.title = "Unlock PDF files. Remove PDF password.";
    dispatch(getUnlockApi());
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
    const storedPassword = localStorage.getItem('protectedPdfPassword');
    if (storedPassword) {
      setPassword(storedPassword);
    }
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
    formData.append("password", password);

    setOpen(true);

    try {
      setIsMerging(true);
      setStatusMessage("Unlocking Files...");
      setError(null);

      const url = `${process.env.REACT_APP_API_URL}/public/api/unlock-pdf`;
      const response = await axios.post(url, formData, {
        "Content-Type": "multipart/form-data",
      });

      if (response.status === 200 && response.data.status) {
        setFileList(response.data);
        setStatusMessage("Success!");
        navigate("/Download_PDF", {
          state: {
            name: "Unlock",
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
    unlockData,
    handleFileChange,
    handleUploadClick,
    toggleCart,
    statusMessage,
    isMerging,
    error,
  };
}

export default useUnlockLogic;