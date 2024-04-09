
const IndexRunfood = () => {
    const { spawn } = require('child_process');
    const dataToSend = "Hyderabad";
    const python = spawn('python', ['script.py', dataToSend]);  

    python.stdout.on('data', (data) => {
    const JsonStr = data.toString();
    console.log(JsonStr);  
    });

    python.on('close', (code) => {
    console.log(`child process close all stdio with code ${code}`);
    });

    return ( 
        <>
        Hii Looking For Food
        Hii Looking For Food
        </>
     );
}
 
export default IndexRunfood;