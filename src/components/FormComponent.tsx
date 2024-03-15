import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { useEffect, useState } from 'react';

function FormComponent() {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [emailValue, setEmailValue] = useState('');

    const handlePasswordOnChange = (e) => {
        setPassword(e.target.value);
    };

    const handleEmailOnChange = (e) => {
        setEmail(e.target.value);
    };

    useEffect(() => {
        setEmailValue(email);
    }, [email]);

    const isPassword = /^[a-zA-Z0-9.,@]+$/.test(password);
    const isEmail = emailValue.includes('@') && emailValue.includes('.');

    return (
        <form className="flex max-w-md flex-col gap-4">
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="email1" value="Your email" />
                </div>
                <div>Email must have <span className='text-red-500'>@</span> and <span className='text-red-500'>.</span></div>
                {isEmail ? <div className='text-green-500'>Correct</div> : <div className='text-red-500'>Invalid input</div>}
                <TextInput id="email1" type="email" placeholder="name@flowbite.com" required onChange={handleEmailOnChange} />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="password1" value="Your password" />
                </div>
                <div>Password must contain letters (a-z) and numbers (0-9)</div>
                {isPassword ? <div className='text-green-500'>Correct</div> : <div className='text-red-500'>Invalid input</div>}
                <TextInput id="password1" type="password" required onChange={handlePasswordOnChange} />
            </div>
            <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Remember me</Label>
            </div>
            <Button type="submit">Submit</Button>
        </form>
    );
}

export default FormComponent;

