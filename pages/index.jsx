import Link from "next/link";

export default function Home() {
  return (
    <> 
      <nav>
        <Link href='/' style={{padding: '5px'}}>Home</Link>
        <Link href='/about' style={{padding: '5px'}}>About</Link>
        <Link href='/contact' style={{padding: '5px'}}>Contact</Link>
      </nav>   
       <h1>Home</h1>  
       <p>This is an Edureka First Assignment done using Nextjs</p>   
    </>
  );
}
