import Link from 'next/link';
import Img from '../components/img'

const Index = () => (
    <div>
        <h1>SSR magician</h1>
        <Img/>
        <Link href='/about'>
            About
        </Link>
        <Link href='/robots'>
            Robots
        </Link>
    </div>
)

export default Index;