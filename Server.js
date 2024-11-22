const express = require("express")
const app = express()

const posts = [
  {
    imagemUrl: "https://images.unsplash.com/photo-1517832207067-4db24a2ae47c",
    linkAcessivel: "https://unsplash.com/photos/HkTMcmlMOUQ",
    descricao: "Uma bela paisagem de montanhas ao pôr do sol, perfeita para relaxar."
  },
  {
    imagemUrl: "https://images.unsplash.com/photo-1574158622682-e40e69881006",
    linkAcessivel: "https://unsplash.com/photos/WLUHO9A_xik",
    descricao: "Um gato preto olhando pela janela em um dia chuvoso."
  },
  {
    imagemUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    linkAcessivel: "https://unsplash.com/photos/6jYoil2GhVk",
    descricao: "Uma praia deslumbrante com águas cristalinas e areia branca."
  },
  {
    imagemUrl: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
    linkAcessivel: "https://unsplash.com/photos/Y6H2S_i9Rdg",
    descricao: "Um prato gourmet de frutos do mar servido elegantemente."
  },
  {
    imagemUrl: "https://images.unsplash.com/photo-1541698444083-023c97d3f4b6",
    linkAcessivel: "https://unsplash.com/photos/R_LPJvLpS5Y",
    descricao: "Uma floresta de inverno coberta de neve, ideal para aventuras geladas."
  }
]


app.use(express.json())
const port = 3000
app.listen(port, (req, res)=>{
  console.log("O servidor esta rodando na porta "+port)
})

app.get("/posts", (req, res)=>{
  res.status(200).json(posts)
})