export default function Footer() {

    const year = new Date().getFullYear();

    return (
         <footer>{`© Hakim Murphy ${year}`}</footer>
    )
}