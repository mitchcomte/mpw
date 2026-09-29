import {NextResponse} from "next/server";

export const runtime = "nodejs";
export const maxDuration = 30;

export async function POST(req:Request){
  try{
    const form = await req.formData();
    const file = form.get("file");
    if(!(file instanceof File)) return NextResponse.json({error:"Choose a PDF to review."},{status:400});
    if(file.size > 10*1024*1024) return NextResponse.json({error:"PDFs must be 10 MB or smaller."},{status:413});
    if(file.type !== "application/pdf" && !file.name.toLowerCase().endsWith(".pdf")) return NextResponse.json({error:"Only PDF files are supported."},{status:415});
    const buffer = Buffer.from(await file.arrayBuffer());
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const pdfParse = require("pdf-parse");
    const parsed = await pdfParse(buffer);
    const text = String(parsed?.text||"").replace(/\u0000/g,"").trim();
    if(!text) return NextResponse.json({error:"We couldn't find selectable text in this PDF. If it is a scanned document, paste the text for now."},{status:422});
    return NextResponse.json({text:text.slice(0,120000),pages:parsed?.numpages||null,fileName:file.name});
  }catch(err){
    console.error("Wedding Builder PDF review error",err);
    return NextResponse.json({error:"We couldn't read that PDF. Try another PDF or paste the document text."},{status:500});
  }
}
