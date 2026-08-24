import { useState } from 'react'
import './Products.css'

function Products() {
  const [billingCycle, setBillingCycle] = useState('monthly')

  // Check Icon Component
  const CheckIcon = () => (
    <div className="check-icon-wrapper">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </div>
  )

  const products = [
    {
      id: 1,
      name: 'Starter',
      monthlyPrice: 9,
      yearlyPrice: 7,
      period: '/month',
      features: [
        'One public biography',
        'Custom profile URL',
        'Basic analytics',
        '5 design themes',
        'Social media links',
        'Skills & achievements section'
      ],
      popular: false
    },
    {
      id: 2,
      name: 'Professional',
      monthlyPrice: 29,
      yearlyPrice: 23,
      period: '/month',
      features: [
        'Unlimited biographies',
        'Advanced analytics dashboard',
        '50+ premium themes',
        'Portfolio gallery',
        'Custom domain support',
        'Priority email support',
        'Export as PDF',
        'Team collaboration'
      ],
      popular: true
    },
    {
      id: 3,
      name: 'Enterprise',
      monthlyPrice: 99,
      yearlyPrice: 79,
      period: '/month',
      features: [
        'Everything in Professional',
        'Dedicated account manager',
        'Custom branding & white-label',
        'Advanced API access',
        'Unlimited portfolio items',
        '24/7 priority support',
        'Custom integrations',
        'SSO & advanced security'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      id: 1,
      text: "BiographWeb completely transformed how I present my professional profile. My biography now gets noticed by recruiters and opportunities come my way!",
      author: "Sarah Johnson",
      role: "Product Manager, TechCorp",
      rating: 5,
      avatar: "SJ"
    },
    {
      id: 2,
      text: "The platform is incredibly intuitive. I created a stunning biography in 15 minutes without any design experience. Highly recommend!",
      author: "Michael Chen",
      role: "Freelance Designer",
      rating: 5,
      avatar: "MC"
    },
    {
      id: 3,
      text: "Professional, elegant, and powerful. BiographWeb gave my portfolio exactly the presentation it deserved. Worth every penny!",
      author: "Emma Williams",
      role: "Director, DesignCo",
      rating: 5,
      avatar: "EW"
    },
    {
      id: 4,
      text: "I love the analytics dashboard. Being able to see who views my profile and how they interact with my work is invaluable.",
      author: "David Park",
      role: "Software Engineer",
      rating: 5,
      avatar: "DP"
    },
    {
      id: 5,
      text: "As a freelancer, having a professional bio online has been a game-changer for attracting clients. BiographWeb makes it so easy!",
      author: "Lisa Anderson",
      role: "Freelance Writer",
      rating: 5,
      avatar: "LA"
    },
    {
      id: 6,
      text: "The customer support team is phenomenal. Whenever I had a question, they responded within hours with helpful solutions.",
      author: "James Rodriguez",
      role: "Marketing Manager",
      rating: 5,
      avatar: "JR"
    }
  ]

  const getPrice = (product) => {
    return billingCycle === 'monthly' ? product.monthlyPrice : product.yearlyPrice
  }

  return (
    <div className="products">
      <section className="products-header">
        <h1 className="products-title">BiographWeb Plans</h1>
        <p className="products-subtitle">
          Choose the perfect plan to showcase your professional story. All plans include profile customization and analytics.
        </p>

        {/* Billing Toggle */}
        <div className="billing-toggle-container">
          <button
            className={`billing-toggle-btn ${billingCycle === 'monthly' ? 'active' : ''}`}
            onClick={() => setBillingCycle('monthly')}
          >
            Monthly
          </button>
          <button
            className={`billing-toggle-btn ${billingCycle === 'yearly' ? 'active' : ''}`}
            onClick={() => setBillingCycle('yearly')}
          >
            Annual<span className="save-badge">Save 20%</span>
          </button>
        </div>
      </section>

      <section className="products-grid-section">
        <div className="products-container">
          <div className="products-grid">
            {products.map(product => (
              <div
                key={product.id}
                className={`product-card ${product.popular ? 'popular' : ''}`}
              >
                {product.popular && (
                  <div className="popular-badge">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                    Most Popular
                  </div>
                )}

                <div className="product-header">
                  <h3 className="product-name">{product.name}</h3>
                  <div className="product-price">
                    <span className="price">${getPrice(product)}</span>
                    <span className="period">{product.period}</span>
                  </div>
                  {billingCycle === 'yearly' && (
                    <div className="billing-note">Billed annually</div>
                  )}
                </div>

                <ul className="product-features">
                  {product.features.map((feature, index) => (
                    <li key={index} className="feature-item">
                      <CheckIcon />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`btn ${product.popular ? 'btn-primary' : 'btn-secondary'} btn-full`}>
                  Start Free Trial
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="testimonials-container">
          <div className="testimonials-header">
            <h2 className="section-title">Loved by creators and professionals</h2>
            <p className="section-subtitle">
              See what our users have to say about their BiographWeb experience
            </p>
          </div>
          <div className="testimonials-masonry">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{testimonial.avatar}</div>
                  <div className="author-info">
                    <strong>{testimonial.author}</strong>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products
