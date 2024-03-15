import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Card from './Card.jsx'

function App() {
    const cardsData = [
        {
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Big_Floppa_and_Justin_2_%28cropped%29.jpg/1127px-Big_Floppa_and_Justin_2_%28cropped%29.jpg",
            title: "Floppa",
            description: "Caracal Cat"
        },
        {
            imageUrl: "https://media.tenor.com/uU_kvtDakbcAAAAe/bingus-cat.png",
            title: "Bingus",
            description: "Sphynx Cat"
        },
        {
            imageUrl: "https://media.discordapp.net/attachments/1213855379230957652/1218212162946994186/frieren-and-the-gang-as-cats-v0-mop4l0v97ngc1.png?ex=6606d77c&is=65f4627c&hm=b980be416cdce43a78a0d727eef0beb470d2a09502bd9fbeb63ed1b8c4d1947d&=&format=webp&quality=lossless&width=493&height=493",
            title: "Fern Cat",
            description: "Tabby Cat"
        },
        {
            imageUrl: "https://cdn.discordapp.com/attachments/1213855379230957652/1218212163576008784/frieren-and-the-gang-as-cats-v0-ppq4b7r97ngc1.png?ex=6606d77d&is=65f4627d&hm=6fab485cd8a5cef2ce6d2fca395732c16b023e39b4654d3587bd3a8aa2c4b9f0&",
            title: "Frieren Cat",
            description: "Tabby Cat"
        },
        {
            imageUrl: "https://media.discordapp.net/attachments/1213855379230957652/1218212163232071760/frieren-and-the-gang-as-cats-v0-hgngw4y97ngc1.png?ex=6606d77d&is=65f4627d&hm=65af45b94a864a7423a54b36dd57242cb0a6bb9fdfe975a21e9491336765b7fb&=&format=webp&quality=lossless&width=662&height=662",
            title: "Stark Cat",
            description: "Tabby Cat"
        }
    ];
    return(
        <>
            <Header/>
            {cardsData.map((card, index) => (
                <Card
                    key={index}
                    imageUrl={card.imageUrl}
                    title={card.title}
                    description={card.description}
                />
            ))}
            <Footer/>
        </>
    )
    
}

export default App
