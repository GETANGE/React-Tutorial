type product={
    productPage: string,
    color: string,
    productTitle: string,
    productInfo: string,
    productSize: string,
    productPrice: number
}
export default function ShoeDetails(props: product) {
    return (
            <div className=" h-4/6  w-1/4 px-5 bg-white shadow shadow-black-500">
            {/* Content for the second div */}
            <h3 className='text-slate-950 text-3xl font-black'>{props.productPage}</h3><br />
            <label htmlFor="nameInput" className="block text-gray-700 text-2xl">{props.productInfo}</label><br />
            <h3 className='text-slate-950 text-3xl font-black	'>{props.productTitle}</h3> <br />

            <div className='p-2'>
                <hr className="bg-black border-0 h-px w-full rounded" /><br />
                <hr className="bg-black border-0 h-px w-full rounded" /><br />
                <hr className="bg-black border-0 h-px w-full rounded" /><br />
            </div>

            <h3 className='text-slate-950 text-3xl font-black'>{props.color}</h3> <br />
            <div className='flex justify-around'>
                <div className='h-5 w-5 bg-black rounded-full'></div>
                <div className='h-5 w-5 bg-blue-700 rounded-full'></div>            
                <div className='h-5 w-5 bg-orange-500	 rounded-full'></div>
                <div className='h-5 w-5 bg-fuchsia-400 rounded-full'></div>
                <div className='h-5 w-5 bg-amber-400 rounded-full'></div>
            </div><br /><br />

            <h3 className='text-slate-950 text-3xl font-black	'>{props.productSize}</h3> <br />
            <div className='flex justify-around'>
                <div className='h-8 w-10 bg-neutral-300	flex justify-center items-center text-black'>40</div>
                <div className='h-8 w-10 bg-neutral-300	flex justify-center items-center text-black'>41</div>            
                <div className='h-8 w-10 bg-neutral-300	flex justify-center items-center text-black'>42</div>
                <div className='h-8 w-10 bg-neutral-300	flex justify-center items-center text-black'>43</div>
                <div className='h-8 w-10 bg-neutral-300	flex justify-center items-center text-black'>44</div>
                <div className='h-8 w-10 bg-neutral-300	flex justify-center items-center text-black'>45</div>
            </div> <br /> <br />

            <div className='flex justify-around'>
                <button className="h-12 w-42 text-white text-xl bg-blue-700 hover:bg-blue-800 rounded-full flex items-center">Add to Cart</button>
                <label htmlFor="nameInput" className="block text-gray-700 text-2xl">$ {props.productPrice.toFixed(2)}</label>
            </div>
        </div>
    )
}
