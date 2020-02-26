var hari = 50;
var bulan =12;
var tahun = 2020;
var bulanX = ''

switch(true){
    case hari <= 0 || hari >= 32:
        console.log ('Hari Harus di isi dengan Angka antara 1-31');
        hari= false;
      break;
    case bulan <= 0 || bulan >= 13:
        console.log (' Bulan Harus di isi dengan Angka antara 1-12');
        bulan= false;
      break;
    case tahun <= 1899  || tahun >= 2201:
        console.log ('Tahun Harus di isi dengan Angka antara 1900-2200');
        tahun =false;
      break;  
}

switch(bulan){
    case 12:
        bulan = "Desember";
        break;
    case 11:
        bulan = "November";
        break;
    case 10:
        bulan = "Oktober";
        break;
    case  9:
        bulan = "September";
        break;
    case 8:
        bulan = "Agustus";
        break;
    case  7:
        bulan = "Juli";
        break;  
    case  6:
        bulan = "Juni";
        break;  
    case 5:
        bulan = "Mei";
        break;
    case 4:
        bulan = "April";
        break;
    case 3:
        bulan = "Maret";
        break;
    case  2:
        bulan = "Februari";
        break;
    case 1:
        bulan = "Januari";
        break;
    default:
        console.log('')
    
}


if ( hari && bulan && tahun){
    console.log( hari + ' ' + bulan + ' '+ tahun)
}
