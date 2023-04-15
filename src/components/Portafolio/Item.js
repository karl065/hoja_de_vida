function Item({item}) {
  return (
    <div className="ml-6 mr-6 flex-col justify-center">
      <h1 className="hover:scale-110 mt-6 rounded-lg flex uppercase font-bold justify-center bg-white hover:cursor-pointer hover:bg-zinc-800 hover:text-white transition-colors">
        {item.alt}
      </h1>
      <img
        className="mt-2 rounded-lg w-auto hover:scale-110"
        alt={item.alt}
        src={item.url}
      />
    </div>
  );
}

export default Item;
