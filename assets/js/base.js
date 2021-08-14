
const DOMAIN_NAME = 'https://trunglaptrinh.github.io/Register-web/'

const PROVINCES = [
	{
		key: 'hni',
		value: 'Hà Nội',
	},
	{
		key: 'tha',
		value: 'Thanh Hoá',
	},
	{
		key: 'hcm',
		value: 'Hồ Chí Minh',
	},
	{
		key: 'bnh',
		value: 'Bắc Ninh',
	},
	{
		key: 'tnn',
		value: 'Thái Nguyên',
	},
	{
		key: 'tbh',
		value: 'Thái Bình',
	},
	{
		key: 'lsn',
		value: 'Long An',
	},
	{
		key: 'py',
		value: 'Phú Yên',
	},
	{
		key: 'hg',
		value: 'Hà Giang',
	},
	{
		key: 'ls',
		value: 'Lạng Sơn',
	},
	{
		key: 'tq',
		value: 'Tuyên Quang',
	},
	{
		key: 'qn',
		value: 'Quảng Ninh',
	},
	{
		key: 'lc',
		value: 'Lào Cai',
	},
	{
		key: 'yb',
		value: 'Yên Bái',
	},
	{
		key: 'db',
		value: 'Điện Biên',
	},
	{
		key: 'hb',
		value: 'Hoà Bình',
	},
	{
		key: 'lch',
		value: 'Lai Châu',
	},
	{
		key: 'sl',
		value: 'Sơn La',
	},
	{
		key: 'hna',
		value: 'Hà Nam',
	},
	{
		key: 'hd',
		value: 'Hải Dương',
	},
	{
		key: 'hp',
		value: 'Hải Phòng',
	},
	{
		key: 'hy',
		value: 'Hưng Yên',
	},
	{
		key: 'nd',
		value: 'Nam Định',
	},
	{
		key: 'nb',
		value: 'Ninh Bình',
	},
	{
		key: 'vp',
		value: 'Vĩnh Phúc',
	},
	{
		key: 'na',
		value: 'Nghệ An',
	},
	{
		key: 'ht',
		value: 'Hà Tĩnh',
	},
	{
		key: 'qb',
		value: 'Quảng Bình',
	},
	{
		key: 'qt',
		value: 'Quảng Trị',
	},
	{
		key: 'tth',
		value: 'Thừa Thiên - Huế.',
	},
	{
		key: 'dn',
		value: 'Đà Nẵng',
	},
	{
		key: 'qn',
		value: 'Quảng Nam',
	},
	{
		key: 'qng',
		value: 'Quảng Ngãi,',
	},
	{
		key: 'bd',
		value: 'Bình Định',
	},
	{
		key: 'kh',
		value: 'Khánh Hoà',
	},
	{
		key: 'nth',
		value: 'Ninh Thuận',
	},
	{
		key: 'bth',
		value: 'Bình Thuận',
	},
	{
		key: 'kt',
		value: 'Kon Tum',
	},
	{
		key: 'gl',
		value: 'Gia Lai',
	},
	{
		key: 'dla',
		value: 'Đắc Lắc',
	},
	{
		key: 'dno',
		value: 'Đắc Nông',
	},
	{
		key: 'ldo',
		value: 'Lâm Đồng',
	},
	{
		key: 'bp',
		value: 'Bình Phước',
	},
	{
		key: 'bdu',
		value: 'Bình Dương',
	},
	{
		key: 'dna',
		value: 'Đồng Nai',
	},
	{
		key: 'tn',
		value: 'Tây Ninh',
	},
	{
		key: 'brvt',
		value: 'Bà Rịa-Vũng Tàu',
	},
	{
		key: 'dt',
		value: 'Đồng Tháp',
	},
	{
		key: 'tg',
		value: 'Tiền Giang',
	},
	{
		key: 'ag',
		value: ', An Giang',
	},
	{
		key: 'btr',
		value: 'Bến Tre',
	},
	{
		key: 'vl',
		value: 'Vĩnh Long',
	},
	{
		key: 'tv',
		value: 'Trà Vinh',
	},
	{
		key: 'hg',
		value: 'Hậu Giang',
	},
	{
		key: 'kg',
		value: 'Kiên Giang',
	},
	{
		key: 'str',
		value: 'Sóc Trăng',
	},
	{
		key: 'bli',
		value: ', Bạc Liêu',
	},
	{
		key: 'cm',
		value: 'Cà Mau',
	},
	{
		key: 'cth',
		value: 'TP Cần Thơ',
	},
]

const GENDERS = {
	male: 'Nam',
	female: 'Nữ',
	orther: 'Khác',
}

const FAVORITES = [
	{
		key: 'movie',
		value: 'Xem phim',
	},
	{
		key: 'game',
		value: 'Chơi game',
	},
	{
		key: 'friends',
		value: 'Giao lưu bạn bè',
	},
	{
		key: 'travel',
		value: 'Đi du lịch',
	},
	{
		key: 'song',
		value: 'Ca hát',
	},
		
]