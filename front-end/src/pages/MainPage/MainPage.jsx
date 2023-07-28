import { useState } from "react";
import { Container } from "./MainPageStyles";
import FileHandler from "../../components/FileHandler/FileHandler";

export default function MainPage() {
  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <Container>
      <FileHandler selectedFile={selectedFile} setSelectedFile={setSelectedFile} />
    </Container>
  )
}
