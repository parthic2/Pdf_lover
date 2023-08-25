import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getJPGtoPDFApi } from "../../../Redux/Action/Pages/JPGToPDFAction";
import axios from "axios";

const useJPGLogic = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [fileList, setFileList] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const [sidebar, setSidebar] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isMerging, setIsMerging] = useState(false);
  const [error, setError] = useState(null);

  const files = [...fileList];

  const jtoPData = useSelector((state) => state.JPGtoPDFReducer.jtoPData);

  useEffect(() => {
    document.title = "Convert JPG to PDF.";
    dispatch(getJPGtoPDFApi());
    const delay = 2000;
    const timer = setTimeout(() => {
      setLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [dispatch]);

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