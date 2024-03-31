const getData=async()=>{
    const res = await fetch("https://gorest.co.in/public/v2/users")
    return res.json()

}

export default getData
