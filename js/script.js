"use strict"

let users = JSON.parse(localStorage.getItem("users")) || [{ username: "Bena", password: "12345" }]
let parfumes = JSON.parse(localStorage.getItem("parfumes")) || [{ name: "Hawas ice", brand: "Rasasi", size: "100ml", price: 30, like: 0 }]


function check() {

    let username = document.getElementById("username")
    let password = document.getElementById("password")
    for (let i = 0; i < users.length; i++) {
        if (username.value===users[i].username) {
            if (password.value===users[i].password) {
                alert("Login effettuato con successo")
                window.location.href = "/html/visualizza.html"
                return
            } else {
                alert("Password errata")
                return
            }
        }else {
            alert("utente non trovato")
            return
        }
    }
    
}

function add() {
    if (document.getElementById("username").value == "" ) {
        if (document.getElementById("password").value == "") {
        alert("Compila tutti i campi")
        return
    }
    let username = document.getElementById("username")
    let password = document.getElementById("password")

    let newUser = {username: username.value,password: password.value}
    let users = JSON.parse(localStorage.getItem("users")) || []

    users.push(newUser)
    localStorage.setItem("users", JSON.stringify(users))

    alert("Utente registrato con successo")
    }
}

function addParfume() {

    if (document.getElementById("nome").value == "" ){
        if (document.getElementById("brand").value == "" ){
            if (document.getElementById("size").value == "" ){
                if (document.getElementById("price").value == "" ){
                    alert("Compila tutti i campi")
                    return
                }
            }
        }    
    }

    let name = document.getElementById("nome")
    let brand = document.getElementById("brand")
    let size = document.getElementById("size")
    let price = document.getElementById("price")

    let newParfume = { name: name.value,brand: brand.value,size: size.value,price: price.value,like: 0}

    let parfumes = JSON.parse(localStorage.getItem("parfumes")) || []
    parfumes.push(newParfume)
    localStorage.setItem("parfumes", JSON.stringify(parfumes))

    alert("Profumo salvato!")
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

