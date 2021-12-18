var Jumlah_Pemakaian = [];
var Tarif_Pemakaian = [];
var Abodemen = [];
var SubTotal = [];
var abodemen;
var tarif;
var pajak;
var subtotal;
var total;

let n = 1;
var x = 0;

function namaPelanggan(){
    var nama_pelanggan = document.getElementById("nama_pelanggan").value;
    var value = select.options[select.selectedIndex].value;
    if(value == ""){
        alert("Jumlah Hari Tidak Valid");
        return false;
    }else{
        
    }
}

function hitung() {

    var hari = document.getElementById("hari").value;
    var select = document.getElementById("listKategori");
    var value = select.options[select.selectedIndex].value;

    if (hari < 31) {

        if (value == "Sosial") {

            abodemen = 10000;
            tarif = 300;
            pajak = 0;
            var addRow = document.getElementById("hasil");
            addRow.innerHTML = "";
            for (let i = 1; i <= hari; i++) {

                addRow.innerHTML += `
                <tr>
                   <td>${i}</td>
                   <td>${i * tarif}</td>
                   <td>${abodemen}</td>
                   <td>${abodemen + i * tarif}</td>
               </tr>
                `

                Jumlah_Pemakaian[x] = i;
                Tarif_Pemakaian[x] = tarif;
                Abodemen[x] = abodemen;
                SubTotal[x] = abodemen + Tarif_Pemakaian[x];


                subtotal = SubTotal[x];
                tarif += 300;
                n++;
                x++;
            }
            var sub_total = document.getElementById("sub_total");
            sub_total.innerHTML = subtotal;
            var Pajak = document.getElementById("pajak");
            Pajak.innerHTML = (subtotal * pajak);
            var bayar = document.getElementById("bayar");
            bayar.innerHTML = (subtotal * pajak) + subtotal;

        } else if (value == "Rumah") {
            abodemen = 30000;
            tarif = 500;
            pajak = 0.1;
            var addRow = document.getElementById("hasil");
            addRow.innerHTML = "";
            for (let i = 1; i <= hari; i++) {
                addRow.innerHTML += `
                <tr>
                   <td>${i}</td>
                   <td>${i * tarif}</td>
                   <td>${abodemen}</td>
                   <td>${abodemen + i * tarif}</td>
               </tr>
                `

                Jumlah_Pemakaian[x] = i;
                Tarif_Pemakaian[x] = tarif;
                Abodemen[x] = abodemen;
                SubTotal[x] = abodemen + Tarif_Pemakaian[x];


                subtotal = SubTotal[x];
                tarif += 300;
                n++;
                x++;
            }

            var sub_total = document.getElementById("sub_total");
            sub_total.innerHTML = subtotal;
            var Pajak = document.getElementById("pajak");
            Pajak.innerHTML = (subtotal * pajak);
            var bayar = document.getElementById("bayar");
            bayar.innerHTML = (subtotal * pajak) + subtotal;

        } else if (value == "Apartemen") {
            abodemen = 50000;
            tarif = 750;
            pajak = 0.15;
            var addRow = document.getElementById("hasil");
            addRow.innerHTML = "";
            for (let i = 1; i <= hari; i++) {
                addRow.innerHTML += `
                <tr>
                   <td>${i}</td>
                   <td>${i * tarif}</td>
                   <td>${abodemen}</td>
                   <td>${abodemen + i * tarif}</td>
               </tr>
                `

                Jumlah_Pemakaian[x] = i;
                Tarif_Pemakaian[x] = tarif;
                Abodemen[x] = abodemen;
                SubTotal[x] = abodemen + Tarif_Pemakaian[x];


                subtotal = SubTotal[x];
                tarif += 300;
                n++;
                x++;
            }
            var sub_total = document.getElementById("sub_total");
            sub_total.innerHTML = subtotal;
            var Pajak = document.getElementById("pajak");
            Pajak.innerHTML = (subtotal * pajak);
            var bayar = document.getElementById("bayar");
            bayar.innerHTML = (subtotal * pajak) + subtotal;

        } else if (value == "Industri") {
            abodemen = 75000;
            tarif = 1000;
            pajak = 0.2;
            var addRow = document.getElementById("hasil");
            addRow.innerHTML = "";
            for (let i = 1; i <= hari; i++) {
                addRow.innerHTML += `
                <tr>
                   <td>${i}</td>
                   <td>${i * tarif}</td>
                   <td>${abodemen}</td>
                   <td>${abodemen + i * tarif}</td>
               </tr>
                `

                Jumlah_Pemakaian[x] = i;
                Tarif_Pemakaian[x] = tarif;
                Abodemen[x] = abodemen;
                SubTotal[x] = abodemen + Tarif_Pemakaian[x];


                subtotal = SubTotal[x];
                tarif += 300;
                n++;
                x++;
            }

            var sub_total = document.getElementById("sub_total");
            sub_total.innerHTML = subtotal;
            var Pajak = document.getElementById("pajak");
            Pajak.innerHTML = (subtotal * pajak);
            var bayar = document.getElementById("bayar");
            bayar.innerHTML = (subtotal * pajak) + subtotal;

        } else {
            abodemen = 100000;
            tarif = 1250;
            pajak = 0.25;
            var addRow = document.getElementById("hasil");
            addRow.innerHTML = "";
            for (let i = 1; i <= hari; i++) {
                addRow.innerHTML += `
                <tr>
                   <td>${i}</td>
                   <td>${i * tarif}</td>
                   <td>${abodemen}</td>
                   <td>${abodemen + i * tarif}</td>
               </tr>
                `

                Jumlah_Pemakaian[x] = i;
                Tarif_Pemakaian[x] = tarif;
                Abodemen[x] = abodemen;
                SubTotal[x] = abodemen + Tarif_Pemakaian[x];


                subtotal = SubTotal[x];
                tarif += 300;
                n++;
                x++;
            }

            var sub_total = document.getElementById("sub_total");
            sub_total.innerHTML = subtotal;
            var Pajak = document.getElementById("pajak");
            Pajak.innerHTML = (subtotal * pajak);
            var bayar = document.getElementById("bayar");
            bayar.innerHTML = (subtotal * pajak) + subtotal;

        }

    } else {
        alert("Jumlah Hari Tidak Valid");
        return false;
    }
}