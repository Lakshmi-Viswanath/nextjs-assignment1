import Link from "next/link";
export default function Contact() {
    return (
      <> 
         <nav>
        <Link href='/' style={{padding: '5px'}}>Home</Link>
        <Link href='/about' style={{padding: '5px'}}>About</Link>
        <Link href='/contact' style={{padding: '5px'}}>Contact</Link>
        </nav>    
         <h1>Contact</h1>  
         <p>Contact lakshmi@abc.com if any queries in the assignment</p>  
        
      </>
    );
  }