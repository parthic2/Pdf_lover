import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const useJPGLogic = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [fileList, setFileList] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const [sidebar, setSidebar] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isMerging, setIsMerging] = useState(false);
  const [error, setError] = useState(null);
  const [jtoPData, setJtoPData] = useState("");
  const files = [...fileList];

  useEffect(() => {
    document.title = "Convert JPG to PDF.";
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
      setJtoPData(data.jpg_to_pdf);
    }

    fetchData();
  }, []);

  const handleFileChange = (e) => {
    const files = e.target.files;
    const fileArray = Array.from(files);
    setFileList(fileArray);

    // Create an array of image URLs
    const imageUrls = fileArray.map((file) => URL.createObjectURL(file));
    setSelectedImages(imageUrls);
  };

  // Upload File
  const handleUploadClick = async () => {
    if (!fileList) {
      return;
    }

    const formData = new FormData();
    for (let i = 0; i < fileList.length; i++) {
      formData.append("files[]", fileList[i]);
    }

    setOpen(true);

    try {
      setIsMerging(true);
      setStatusMessage("Converting JPG to PDF Files...");
      setError(null);

      const url = `${process.env.REACT_APP_API_URL}/public/api/image-to-pdf`;
      const response = await axios.post(url, formData, {
        "Content-Type": "multipart/form-data",
      });

      if (response.status === 200 && response.data.status) {
        setFileList(response.data);
        setStatusMessage("Success");
        navigate("/Download_PDF", {
          state: {
            name: "JPG to PDF",
            file: response.data.data.file,
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
    selectedImages,
    files,
    open,
    fileList,
    loading,
    sidebar,
    jtoPData,
    handleFileChange,
    handleUploadClick,
    toggleCart,
    statusMessage,
    isMerging,
    error,
  };
}

export default useJPGLogic;