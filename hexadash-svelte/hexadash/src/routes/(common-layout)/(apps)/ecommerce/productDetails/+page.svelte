<script>
	import { Button, Col, Container, Row } from '@sveltestrap/sveltestrap';
	import { onMount } from 'svelte';
	import Swiper from 'swiper';
	import { register } from 'swiper/element/bundle';
// Import Swiper styles
	import 'swiper/css';

	import 'swiper/css/free-mode';
	import 'swiper/css/navigation';
	import 'swiper/css/thumbs';

	import BreadcrumbOne from '$lib/components/breadcrumbs/BreadcrumbOne.svelte';

	import { Share2Icon, ShoppingBagIcon } from 'svelte-feather-icons';

	const breadcrumbData = {
		pageTitle: 'Product Details',
		bcItem: 'Dashboard',
		bcItemActive: 'Product Details'
	};
	
	// register Swiper custom elements
	register();

	let swiper;
	let swiper2;

	onMount(() => {
		swiper = new Swiper(".mySwiper", {
			spaceBetween: 10,
			slidesPerView: 3,
			freeMode: true,
			loop: true,
			watchSlidesProgress: true,
		});

		swiper2 = new Swiper(".mySwiper2", {
			spaceBetween: 10,
			loop: true,
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			thumbs: {
				swiper: swiper,
			},
		});
	});
	
</script>

<div class="crm mb-25">
	<Container fluid>
		<Row>
			<Col lg={12}>
				<BreadcrumbOne {...breadcrumbData} />
			</Col>
		</Row>
	</Container>
	<Container fluid>
		<div class="card product-details h-100 border-0">
			<div class="product-item">
				<Row>
					<Col lg={5}>
						<div class="product-details-gallery">
							<!-- Main Swiper -> pass thumbs swiper instance -->
							<div style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff" class="swiper mySwiper2">
								<div class="swiper-wrapper">
								  <div class="swiper-slide">
									<img
										src="/img/products/large/1.jpg"
										alt=""
										class="img-fluid d-flex"
									/>
								  </div>
								  <div class="swiper-slide">
									<img
										src="/img/products/large/2.png"
										alt=""
										class="img-fluid d-flex"
									/>
								  </div>
								  <div class="swiper-slide">
									<img
										src="/img/products/large/3.jpg"
										alt=""
										class="img-fluid d-flex"
									/>
								  </div>
								  <div class="swiper-slide">
									<img
										src="/img/products/large/4.jpg"
										alt=""
										class="img-fluid d-flex"
									/>
								  </div>
								</div>
							  </div>
							  <div thumbsSlider="" class="swiper mySwiper">
								<div class="swiper-wrapper">
								  <div class="swiper-slide">
									<img src="/img/products/1.png" alt="" class="img-fluid d-flex" />
								  </div>
								  <div class="swiper-slide">
									<img src="/img/products/2.png" alt="" class="img-fluid d-flex" />
								  </div>
								  <div class="swiper-slide">
									<img src="/img/products/3.png" alt="" class="img-fluid d-flex" />
								  </div>
								  <div class="swiper-slide">
									<img src="/img/products/7.png" alt="" class="img-fluid d-flex" />
								  </div>
								</div>
							  </div>
						</div>
					</Col>
					<Col lg={7}>
						<div class="b-normal-b mb-25 pb-sm-35 pb-15 mt-lg-0 mt-15">
							<div class="product-item__body">
								<h4 class="product-item__title">
									<a href="#" class="card-title"> This stools are also decently stored</a>
								</h4>
								<div class="product-item__content text-capitalize">
									<div class="stars-rating d-flex align-items-center">
										<span class="star-icon las la-star active" />
										<span class="star-icon las la-star active" />
										<span class="star-icon las la-star active" />
										<span class="star-icon las la-star active" />
										<span class="star-icon las la-star-half-alt active" />
										<span class="stars-rating__point">4.9</span>
										<span class="stars-rating__review"><span>778</span> Reviews</span>
									</div>
									<span class="product-details-brandName">Brand: <span>Louis Poulsen</span></span>
									<span class="product-desc-price"><sub>$</sub>200.00</span>
									<div class="d-flex align-items-center mb-2">
										<span class="product-price">$100.00</span>
										<span class="product-discount">50% Off</span>
									</div>
									<p class="product-details-area">
										Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
										tempor invidunt ut labore et dolore magna.
									</p>
									<div class="product-details__availability">
										<div class="title">
											<p>Available:</p>
											<span class="stock">In stock</span>
										</div>
										<div class="title">
											<p>Shipping:</p>
											<span class="free"> Free</span>
										</div>
									</div>
									<div class="quantity product-quantity flex-wrap">
										<div class="me-15 d-flex align-items-center flex-wrap">
											<p class="fs-14 fw-500 color-dark">Quantity:</p>
											<input type="button" value="-" class="qty-minus bttn bttn-left wh-36" />
											<input type="number" value="1" class="qty qh-36 input" />
											<input type="button" value="+" class="qty-plus bttn bttn-right wh-36" />
										</div>
										<span class="fs-13 fw-400 color-light my-sm-0 my-10">540 pieces available</span>
									</div>
									<div class="product-item__button mt-lg-30 mt-sm-25 mt-20 d-flex flex-wrap">
										<div class="d-flex flex-wrap product-item__action align-items-center">
											<Button color="primary" class="border-0 me-10 my-sm-0 my-2">buy now</Button>
											<Button color="secondary" class="border-0 px-25 my-sm-0 my-2 me-10"
												><ShoppingBagIcon /> Add to cart</Button
											>
											<div class="like-icon">
												<a href="#">
													<i class="lar la-heart icon" />
												</a>
											</div>
											<div class="like-icon me-15 my-sm-0 my-3 ">
												<a href="#">
													<Share2Icon />
												</a>
											</div>
										</div>
										<div class="product-deatils__social my-xxl-0 my-10 d-flex align-items-center">
											<ul class="d-flex">
												<li><a href="#"><i class="la la-facebook-f" /></a></li>
												<li><a href="#"><i class="lab la-twitter" /></a></li>
												<li><a href="#"><i class="lab la-pinterest" /></a></li>
												<li><a href="#"><i class="lab la-linkedin-in" /></a></li>
												<li><a href="#"><i class="lab la-telegram" /></a></li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="product-details__availability">
							<div class="title">
								<p>Category:</p>
								<span class="free">Furniture</span>
							</div>
							<div class="title">
								<p>Tags:</p>
								<span class="free"> Blue, Green, Light</span>
							</div>
						</div>
					</Col>
				</Row>
			</div>
		</div>
	</Container>
</div>

<style lang="scss">
	:global{
		@import "../../../../../assets/sass/mixins/functions";
		@import "../../../../../assets/sass/mixins/rfs";
		@import "../../../../../assets/sass/mixins/media-queries";
		@import "../../../../../assets/sass/components/users";
		@import "../../../../../assets/sass/components/shop";
		@import "../../../../../assets/sass/components/ecommerce";
	}
</style>