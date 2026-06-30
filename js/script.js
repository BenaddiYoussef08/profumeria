"use strict"

let users = JSON.parse(localStorage.getItem("users")) || [{ username: "Bena", password: "12345" }]
let parfumes = JSON.parse(localStorage.getItem("parfumes")) || [{ name: "Hawas ice", brand: "Rasasi", size: "100ml", price: 30, like: 0 }]


function check() {
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    
    if (username == "" || password == "") {
        alert("Compila tutti i campi")
        return
    }
    
    let users = JSON.parse(localStorage.getItem("users")) || []
    
    for (let i = 0; i < users.length; i++) {
        if (username === users[i].username) {
            if (password === users[i].password) {
                alert("Login effettuato con successo")
                window.location.href = "./html/visualizza.html"
                return
            } else {
                alert("Password errata")
                return
            }
        }
    }
    alert("Utente non trovato")
}

function add() {
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    
    if (username == "" || password == "") {
        alert("Compila tutti i campi")
        return
    }
    
    let newUser = { username: username, password: password }
    let users = JSON.parse(localStorage.getItem("users")) || []
    
    for (let i = 0; i < users.length; i++) {
        if (users[i].username === username) {
            alert("Utente già registrato")
            return
        }
    }
    
    users.push(newUser)
    localStorage.setItem("users", JSON.stringify(users))
    
    alert("Utente registrato con successo")
    document.getElementById("username").value = ""
    document.getElementById("password").value = ""
}

function addParfume() {
    let name = document.getElementById("nome").value
    let brand = document.getElementById("brand").value
    let size = document.getElementById("size").value
    let price = document.getElementById("price").value

    if (name == "" || brand == "" || size == "" || price == "") {
        alert("Compila tutti i campi")
        return
    }

    let newParfume = { name: name, brand: brand, size: size, price: price, like: 0}

    let parfumes = JSON.parse(localStorage.getItem("parfumes")) || []
    parfumes.push(newParfume)
    localStorage.setItem("parfumes", JSON.stringify(parfumes))

    alert("Profumo salvato!")
    document.getElementById("nome").value = ""
    document.getElementById("brand").value = ""
    document.getElementById("size").value = ""
    document.getElementById("price").value = ""
}



function viewParfume() {
    let container = document.getElementById("profumi-row")
    container.innerHTML = ""

    let parfumes = JSON.parse(localStorage.getItem("parfumes")) || []

    for (let i = 0; i < parfumes.length; i++) {
        let col = document.createElement("div")
        col.className = "col-md-4 mb-3"
        col.innerHTML = `
            <div class="card h-100 border-primary shadow-sm text-dark rounded-3 ">
                <div class="card-body text-start ">

                    <div class="d-flex justify-content-between align-items-start">
                        <div>
                            <h5 class="card-title text-primary">${parfumes[i].name}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${parfumes[i].brand}
                            </h6>
                        </div>

                        <button class="btn btn-sm p-0 border-0 bg-transparent"
                            onclick="Like(${i})">
                            <span style="font-size:22px; cursor:pointer; color:${parfumes[i].like == 1 ? 'red' : 'gray'}">
                                ♥
                            </span>
                        </button>
                    </div>
                    <p class="card-text mt-2">Size: ${parfumes[i].size}</p>
                    <h4 class="text-success">€${parfumes[i].price}</h4>
                    <a href="https://www.notino.it/${parfumes[i].brand.replace(/\s+/g, '-').toLowerCase()}/${parfumes[i].name.replace(/\s+/g, '-').toLowerCase()}" class="card-text btn btn-outline-primary" target="_blank">Cerca</a>
                    <button class="btn btn-outline-secondary" onclick="deleteParfume(${i})">Elimina</button>
                </div>
            </div>
        `
        container.appendChild(col)
    }
}
function deleteParfume(i) {
    let parfumes = JSON.parse(localStorage.getItem("parfumes")) || []
    parfumes.splice(i, 1)
    localStorage.setItem("parfumes", JSON.stringify(parfumes))
    viewParfume()
}

function Like(index) {
    let parfumes = JSON.parse(localStorage.getItem("parfumes")) || []

    if (!parfumes[index].like) {
        parfumes[index].like = 1
    } else {
        parfumes[index].like = 0
    }
    localStorage.setItem("parfumes", JSON.stringify(parfumes))

    viewParfume()
}
