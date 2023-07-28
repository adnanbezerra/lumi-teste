import { Form, InsertDoc, Label } from "./FileHandlerStyles";
import { FaFileDownload } from "react-icons/fa";
import { PdfReader } from "pdfreader";

export default function FileHandler() {
  async function sendBill(e) {
    const file = e.target.files[0];
    await gatherInformationFromPdf(file);
  }

  async function gatherInformationFromPdf(file) {
    let content;

    new PdfReader().parseFileItems(file, (err, item) => {
      if (err) console.error("error:", err);
      else if (!item) console.warn("end of file");
      else if (item.text) console.log(item.text);
    });

    console.log(content);
  }

  return (
    <Form>
      <Label htmlFor="input">
        <FaFileDownload style={{ marginRight: '5px', color: '#02FC89' }} />
        Inserir documento
      </Label>

      <InsertDoc
        type="file"
        id="input"
        accept=".pdf"
        onChange={sendBill}
      />
    </Form>
  )
}