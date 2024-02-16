const Service = ({item}: {item: Product}) => {
  return (
    <div dir="rtl" className="hover:-translate-y-2 hover:border-purple-300 transition-all duration-200 m-4 py-4 shadow w-72 rounded border-2 flex flex-col justify-center items-center text-center px-8">
        <img src={item.img} alt="item" className="w-52"/>
        <h1 className="font-bold my-4">{item.name}</h1>
        <p className="truncate w-64">{item.description}</p>
    </div>
  )
}
export default Service