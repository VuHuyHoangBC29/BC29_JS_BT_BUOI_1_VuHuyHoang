//Bai 1: Tinh luong nhan vien
/**
 * -Dau vao:
 *  +Luong_1_ngay: 100000
 *  +So_ngay_lam: 30
 * 
 * -Xu ly:
 *  +Luong = Luong_1_ngay * So_ngay_lam
 * 
 * -Dau ra:
 *  +Luong.
 */
var luong1Ngay = 100000;
var soNgayLam = 30;
var luong = 0;
luong = luong1Ngay*soNgayLam;
var currentFormat = new Intl.NumberFormat("vn-VN");
var ketQuaBai1 = "Tien luong la: " + currentFormat.format(luong);
console.log(ketQuaBai1);

//Bai 2: Tinh gia tri trung binh cua 5 so thuc
/**
 * -Dau vao:
 *  +5 so thuc: A, B, C, D, E.
 * 
 * -Xu ly:
 *  +Gia tri trung binh = (A + B + C + D + E)/5
 * 
 * -Dau ra:
 *  +Gia tri trung binh.
 */
var A = 1;
var B = 2;
var C = 3;
var D = 4;
var E = 5;
var gttb = 0;
gttb = (A+B+C+D+E)/5;
var ketQuaBai2 = "Gia tri trung binh cua 5 so thuc la: " + gttb;
console.log(ketQuaBai2);

//Bai 3: Quy doi tien
/**
 * -Dau vao:
 *  +Gia tri USD hien tai: 23500
 *  +So tien USD: 10
 * 
 * -Xu ly:
 *  +Quy doi USD ra VND = Gia tri USD hien tai * So tien USD
 * 
 * -Dau ra:
 *  +So tien VND sau khi quy doi.
 */
var gtUSDHienTai = 23500;
var soTienUSD = 10;
var soTienVND = 0;
soTienVND = gtUSDHienTai * soTienUSD;
var currentFormat = new Intl.NumberFormat("vn-VN");
var ketQuaBai3 = "So tien VND la: " + currentFormat.format(soTienVND);
console.log(ketQuaBai3);

//Bai 4: Tinh dien tich, chu vi hinh chu nhat
/**
 * -Dau vao:
 *  +Chieu dai HCN.
 *  +Chieu rong HCN.
 * 
 * -Xu ly:
 *  +Dien tich HCN = Chieu dai HCN * Chieu rong HCN
 *  +Chu vi HCN = (Chieu dai HCN + Chieu rong HCN)*2
 * 
 * -Dau ra:
 *  +Dien tich HCN
 *  +Chu vi HCN
 */
var chieuDaiHCN = 6;
var chieuRongHCN = 4;
var dienTichHCN = chieuDaiHCN*chieuRongHCN;
var chuViHCN = (chieuDaiHCN + chieuRongHCN) * 2; 
var ketQuaBai4_1 = "Dien tich HCN la: " + dienTichHCN;
console.log(ketQuaBai4_1);
var ketQuaBai4_2 = "Chu vi HCN la: " + chuViHCN;
console.log(ketQuaBai4_2);

//Bai 5: Tinh tong 2 ky so
/**
 * -Dau vao:
 *  +So co 2 chu so: n = 76
 * 
 * -Xu ly:
 *  +Tach lay hang chuc: Math.floor(n/10)
 *  +Tach lay hang don vi: n%10
 *  +Hang chuc + hang don vi
 * 
 * -Dau ra:
 *  +Show ket qua 
 */
var n = 76;
var hangChuc = Math.floor(n/10);
var hangDonVi = n%10;
var tong2KySo = hangChuc + hangDonVi;
var ketQuaBai5 = "Tong 2 ky so la: " + tong2KySo;
console.log(ketQuaBai5);