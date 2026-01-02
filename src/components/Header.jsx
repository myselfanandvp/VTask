import vtask_icon from '../assets/vtask_icon.png';

const Header = () => {
  return (
    <header className="">
      <div className="grid grid-cols-1 place-items-center ">
        <div className="p-2">
          <a href="">
            <img src={vtask_icon} className='h-30 w-30' alt="" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;