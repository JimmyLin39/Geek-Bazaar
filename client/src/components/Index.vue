<template>
<div class="container">
  <section class="row">
    <div class="col-sm-6 col-md-4">
      <section class="card card-product">
        <figure class="card-img-top card-product-image">
          <img src="../assets/logo.png" alt="Product image">
        </figure>
        <div class="card-content">
          <aside class="card-overlay">
            <button class="btn btn-outline-primary add-to-cart" type="button" name="button">Add to cart</button>
          </aside>
          <div class="card-body">
            <header class="product-info">
              <h1 class="title">product.name</h1>
              <span class="price">product.price</span>
            </header>
            <p class="description">product.description</p>
          </div>
        </div>
      </section>
    </div>
  </section>
</div>
</template>

<style lang="scss" scoped>
.add-to-cart {
  margin: 0 auto;
}

.product-info {
  display: flex;
  align-items: center;


  .title {
    flex-grow: 1;
    margin: 0;
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
  }

  .price {
    margin-left: .5rem;
    font-size: 1.25rem;
    font-weight: 700;
    flex-shrink: 0;
  }
}

.description {
  margin: 16px 0 0;
  display: none;
}

.card-product:hover .description {
  display: block;
}

</style>
