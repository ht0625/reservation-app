const Product = require('./model/product')

class FakeDb {

  constructor() {
    this.products = [
      {
        coverImage: './assets/img/phone-cover.jpg',
        name: 'Phone XL',
        price: 799,
        description: 'A large phone with one of the best screens',
        heading1: 'テストheading1',
        heading2: 'テストheading2',
        heading3: 'テストheading3',
        headingtext1: 'サンプルテキスト1 サンプルテキストが入りますサンプルテキストが入りますサンプルテキストが入りますサンプルテキストが入ります',
        headingtext2: 'サンプルテキスト2 サンプルテキストが入りますサンプルテキストが入りますサンプルテキストが入りますサンプルテキストが入ります',
        headingtext3: 'サンプルテキスト3 サンプルテキストが入りますサンプルテキストが入りますサンプルテキストが入りますサンプルテキストが入ります',
      },
      {
        coverImage: './assets/img/phone-cover.jpg',
        name: 'Phone Mini',
        price: 699,
        description: 'A great phone with one of the best cameras',
        heading1: 'テストheading1',
        heading2: 'テストheading2',
        heading3: 'テストheading3',
        headingtext1: 'サンプルテキスト1 サンプルテキストが入りますサンプルテキストが入りますサンプルテキストが入りますサンプルテキストが入ります',
        headingtext2: 'サンプルテキスト2 サンプルテキストが入りますサンプルテキストが入りますサンプルテキストが入りますサンプルテキストが入ります',
        headingtext3: 'サンプルテキスト3 サンプルテキストが入りますサンプルテキストが入りますサンプルテキストが入りますサンプルテキストが入ります',
      },
      {
        coverImage: './assets/img/phone-cover.jpg',
        name: 'Phone Standard',
        price: 299,
        description: '',
        heading1: 'テストheading1',
        heading2: 'テストheading2',
        heading3: 'テストheading3',
        headingtext1: 'サンプルテキスト1 サンプルテキストが入りますサンプルテキストが入りますサンプルテキストが入りますサンプルテキストが入ります',
        headingtext2: 'サンプルテキスト2 サンプルテキストが入りますサンプルテキストが入りますサンプルテキストが入りますサンプルテキストが入ります',
        headingtext3: 'サンプルテキスト3 サンプルテキストが入りますサンプルテキストが入りますサンプルテキストが入りますサンプルテキストが入ります',
      },
      {
        coverImage: './assets/img/phone-cover.jpg',
        name: 'Phone Special',
        price: 999,
        description: '',
        heading1: 'テストheading1',
        heading2: 'テストheading2',
        heading3: 'テストheading3',
        headingtext1: 'サンプルテキスト1 サンプルテキストが入りますサンプルテキストが入りますサンプルテキストが入りますサンプルテキストが入ります',
        headingtext2: 'サンプルテキスト2 サンプルテキストが入りますサンプルテキストが入りますサンプルテキストが入りますサンプルテキストが入ります',
        headingtext3: 'サンプルテキスト3 サンプルテキストが入りますサンプルテキストが入りますサンプルテキストが入りますサンプルテキストが入ります',
      }
    ]
  }

  async initDb(){
    await this.cleanDb()
    this.pushProductsToDb()
  }


  async cleanDb(){
    await Product.deleteMany({})
  }

  pushProductsToDb() {
    this.products.forEach(
      (product) => {
        const newProduct = new Product(product)
        newProduct.save()
      }
    )
  }

  seeDb(){
    this.pushProductsToDb()
  }


}

module.exports = FakeDb
