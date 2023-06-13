let miboton = document.getElementById('addProduct')

miboton.addEventListener('click', e => {

    let cid =  e.target.getAttribute("data-cartid")
    let pid = e.target.getAttribute("data-productid")
    let obj = {}

    obj["cid"] = cid
    obj["pid"] = pid
    console.log(cid)
    console.log(pid)

    const url = `/api/carts/${cid}/products/${pid}`
    const headers = {
        'Content-Type': 'application/json'
    }
    const method = 'PUT'
    console.log(obj)
    const body = JSON.stringify(obj)
    console.log("Body: ")
    console.log(body)
    fetch(url, {
        headers,
        method,
        body,
    })
    .then(response => response.json())
    .then(data => alert("Producto Agregado al carrito"))
    .catch(error => console.log(error))
})