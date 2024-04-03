import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const useRotateLogic = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [fileList, setFileList] = useState([]);
  const [rotation, setRotation] = useState(0);
  const [sidebar, setSidebar] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isMerging, setIsMerging] = useState(false);
  const [error, setError] = useState(null);
  const [rotateData, setRotateData] = useState("");
  const files = [...fileList];
  const pageNumber = 1;

  useEffect(() => {
    document.title = "Rotate PDF files.";
    const delay = 500;
    const timer = setTimeout(() => {
      setLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${process.env.REACT_APP_JSON_URL}/detailsPages`);
      const data = await response.json();
      setRotateData(data.rotate);
    }

    fetchData();
  }, []);

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