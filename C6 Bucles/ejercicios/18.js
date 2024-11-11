function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
    let producto = 1
    const menor = Math.min(a, b)
    const mayor = Math.max(a, b)

    for (let i = menor; i <= mayor; i++) {
      producto *= i
    }
    return producto === -0 ? 0 : producto;
}
  
module.exports = productoEntreNúmeros;