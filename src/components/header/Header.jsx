import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <header className='flex justify-between items-center py-8 border-b-2'>
            <h3 className="font-bold text-4xl">Knowledge Cafe</h3>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;