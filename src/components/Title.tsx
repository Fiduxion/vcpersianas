const Title = ({children} : {children: React.ReactNode} ) => {
    return <p className="text-slate-200 text-center font-bold text-4xl my-6 pb-1 border-b-4 border-orange-500 w-fit mx-auto">{children}</p>
}

export default Title;