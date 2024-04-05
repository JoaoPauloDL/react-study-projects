import { useState } from "react";
import QRCode from "react-qr-code";
import './styles.css'

const QRCodeGenerator = () => {
  const [qrCode, setQrCode] = useState("");
  const [input, setIput] = useState("");

  const handleGenerateQrCode = () => {
    setQrCode(input);
    setIput('')
  };

  return (
    <div className="qrCode-container">
      <h1>QR Code Generator</h1>
      <div className="input-container">
        <input
          onChange={(e) => setIput(e.target.value)}
          type="text"
          name="qr-code"
          value={input}
          placeholder="Enter your value here"
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGenerateQrCode}
        >
          Generate
        </button>
      </div>
      <div>
        <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff" />
      </div>
    </div>
  );
};

export default QRCodeGenerator;
