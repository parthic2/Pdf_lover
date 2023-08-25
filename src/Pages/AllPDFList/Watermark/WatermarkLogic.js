import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAddWatermarkApi } from "../../../Redux/Action/Pages/AddWaterMarkAction";
import axios from "axios";

const useWatermarkLogic = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("PDFLover");
  const [currentFont, setCurrentFont] = useState("Lohit marathi");
  const [textStyle, setTextStyle] = useState("Bold");
  const [fontSize, setFontSize] = useState(10);
  const [transparency, setTransparency] = useState("100");
  const [mosaic, setMosaic] = useState(false);
  const [color, setColor] = useState("");
  const [rotation, setRotation] = useState(0);
  const [verticalPos, setVerticalPos] = useState("bottom");
  const [horizontalPos, setHorizontalPos] = useState("right");
  const [toggleStateWater, setToggleStateWater] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [startPage, setStartPage] = useState(0);
  const [endPage, setEndPage] = useState(0);
  const [open, setOpen] = useState(false);
  const [fileList, setFileList] = useState([]);
  const [imgData, setImgData] = useState("");
  const [sidebar, setSidebar] = useState(false);
  const [loading, setLoading] = useState(true);
  const [statusMessage, setStatusMessage] = useState("");
  const [isMerging, setIsMerging] = useState(false);
  const [error, setError] = useState(null);
  const pageNumber = 1;
  const files = [...fileList];

  const watermarkData = useSelector(
    (state) => state.addWatermarkReducer.watermarkData
  );

  useEffect(() => {
    document.title = "Add watermark to a PDF files.";
    dispatch(getAddWatermarkApi());
    const delay = 2000;
    const timer = setTimeout(() => {
      setLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [dispatch]);

  // For Text
  const changeText = (e) => {
    setText(e);
  }

  // For font-family
  const changeFont = (newFont) => {
    setCurrentFont(newFont);
  }

  // For FontStyle
  const handleStyle = (newStyle) => {
    setTextStyle(newStyle);
  }

  // For Font size
  let incrementFontSize = () => {
    if (fontSize < 100) {
      setFontSize(fontSize + 1);
    }
  };

  let decrementFontSize = () => {
    if (fontSize > 0) {
      setFontSize(fontSize - 1);
    }
  }

  // For transparency
  const changeTransparency = (e) => {
    setTransparency(e);
  }

  // For Rotation
  const changeRotation = () => {
    setRotation((rotation + 90) % 360);
  }

  // Font Position
  const changeVerPosition = (newPos) => {
    setVerticalPos(newPos);
  }

  const changeHorPosition = (newPos) => {
    setHorizontalPos(newPos);
  }

  // For Active tabs
  const handleToggleTab = (index) => {
    setToggleStateWater(index);
  }

  // For Page Range
  const handleStartPageChange = (e) => {
    const value = Number(e.target.value);
    setStartPage(value);
    setEndPage(Math.max(value, endPage));
  };

  const handleLastPageChange = (e) => {
    const value = Number(e.target.value);
    setEndPage(value);
    setStartPage(Math.min(value, startPage));
  };

  // Handle file change
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFileList([selectedFile]);
    setPageCount(0);
    setStartPage(0);
    setEndPage(0);

    const reader = new FileReader();
    reader.onload = async (event) => {
      const typedArray = new Uint8Array(event.target.result);
      const pdf = await new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.js';
        script.onload = () => {
          window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.worker.js';

          const loadingTask = window.pdfjsLib.getDocument(typedArray);
          loadingTask.promise.then((pdfDocument) => {
            resolve(pdfDocument);
          }).catch((error) => {
            reject(error);
          });
        };
        document.body.appendChild(script);
      });

      const numPages = pdf.numPages;
      setPageCount(numPages);
      setStartPage(1);
      setEndPage(numPages);
    };

    reader.onerror = (error) => {
      console.error('Error reading file:', error);
    };

    reader.readAsArrayBuffer(selectedFile);
  };

  // Handle image
  const handleImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImgData(e.target.files[0]);
    }
  }

  // WaterMark API
  async function handleButtonClick() {
    setOpen(true);

    let responseText;
    let responseImage;

    // Text API
    try {
      setIsMerging(true);
      setStatusMessage("Adding Watermark (Text) Files...");
      setError(null);

      if (!fileList) {
        return;
      }

      const formData = new FormData();
      formData.append("file", fileList[0]);
      formData.append("mode", "text");
      formData.append("text", text);
      formData.append("pages", `${startPage}-${endPage}`);
      formData.append("vertical_position", verticalPos);
      formData.append("horizontal_position", horizontalPos);
      formData.append("mosaic", mosaic);
      formData.append("rotation", rotation);
      formData.append("font_family", currentFont);
      formData.append("font_style", textStyle);
      formData.append("font_size", fontSize);
      formData.append("font_color", color);
      formData.append("transparency", transparency);

      const url = `${process.env.REACT_APP_API_URL}/public/api/watermark-pdf`;
      responseText = await axios.post(url, formData, {
        "Content-Type": "multipart/form-data",
      });

      if (responseText.status === 200 && responseText.data.status) {
        setFileList(responseText.data);
        setStatusMessage("Success!");
        navigate("/Download_PDF", {
          state: {
            name: "Watermark PDF",
            file: responseText.data.data.file
          },
        });
      } else {
        setOpen(false);
        setError(responseText.data.msg || "An error occurred");
      }
    } catch (error) {
      setError("Something Went Wrong! (Text)");
      setTimeout(() => {
        setOpen(false);
      }, 2000);
    }

    // Image API
    try {
      setIsMerging(true);
      setStatusMessage("Adding Watermark (Image) Files..."); 
      setError(null);
      setOpen(true);

      var formImageData = new FormData();
      formImageData.append("file", fileList[0]);
      formImageData.append("image", imgData);

      const url = `${process.env.REACT_APP_API_URL}/public/api/watermark-pdf-image`;
      responseImage = await axios.post(url, formImageData, {
        "Content-Type": "multipart/form-data",
      });

      if (responseImage.status === 200 && responseImage.data.status) {
        setFileList(responseImage.data);
        setStatusMessage("Success!");
        navigate("/Download_PDF", {
          state: {
            name: "Watermark PDF",
            file: responseImage.data.data.file
          },
        });
      } else {
        setOpen(false);
        setError(responseImage.data.msg || "An error occurred");
      }
    } catch (error) {
      setError("Something Went Wrong! (Image)");
      setTimeout(() => {
        setOpen(false);
      }, 2000);
      setOpen(false);
    }
  }

  // For Sidebar
  const toggleCart = () => {
    setSidebar(!sidebar);
  };

  return {
    text,
    currentFont,
    fontSize,
    setFontSize,
    transparency,
    textStyle,
    mosaic,
    rotation,
    verticalPos,
    horizontalPos,
    startPage,
    endPage,
    imgData,
    sidebar,
    loading,
    fileList,
    open,
    pageNumber,
    files,
    handleFileChange,
    isOpen,
    setIsOpen,
    setMosaic,
    setColor,
    toggleStateWater,
    pageCount,
    changeText,
    changeFont,
    handleStyle,
    incrementFontSize,
    decrementFontSize,
    changeTransparency,
    changeRotation,
    changeVerPosition,
    changeHorPosition,
    handleToggleTab,
    handleStartPageChange,
    handleLastPageChange,
    handleImage,
    handleButtonClick,
    toggleCart,
    watermarkData,
    statusMessage,
    isMerging,
    error,
  };
}

export default useWatermarkLogic;