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
      name: 'Premium',
      monthlyPrice: 49,
      yearlyPrice: 39,
      period: '/month',
      features: [
        'Up to 100 projects',
        'Advanced analytics dashboard',
        'Priority email support',
        'Custom branding options',
        'Team collaboration tools',
        '50GB cloud storage'
      ],
      popular: false
    },
    {
      id: 2,
      name: 'Professional',
      monthlyPrice: 99,
      yearlyPrice: 79,
      period: '/month',
      features: [
        'Unlimited projects',
        'Real-time analytics & insights',
        '24/7 priority support',
        'Full custom branding',
        'Advanced team collaboration',
        '500GB cloud storage',
        'API access & webhooks',
        'Custom integrations'
      ],
      popular: true
    },
    {
      id: 3,
      name: 'Enterprise',
      monthlyPrice: 199,
      yearlyPrice: 159,
      period: '/month',
      features: [
        'Everything in Professional',
        'Dedicated account manager',
        'Custom SLA guarantees',
        'Advanced security features',
        'On-premise deployment',
        'Unlimited storage',
        'Training & onboarding',
        'White-label solutions'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      id: 1,
      text: "This platform has completely transformed how our team works. The interface is incredibly intuitive, and the features are exactly what we needed to scale our operations.",
      author: "Sarah Johnson",
      role: "CEO, TechCorp",
      rating: 5,
      avatar: "SJ"
    },
    {
      id: 2,
      text: "Outstanding customer support and rock-solid reliability. We've seen a 40% increase in productivity since making the switch. Best decision we made this year.",
      author: "Michael Chen",
      role: "CTO, StartupXYZ",
      rating: 5,
      avatar: "MC"
    },
    {
      id: 3,
      text: "The best investment we've made this year. Clean design, powerful features, and excellent value for money. Our clients love the results.",
      author: "Emma Williams",
      role: "Product Manager, DesignCo",
      rating: 5,
      avatar: "EW"
    },
    {
      id: 4,
      text: "Seamless integration with our existing tools. The API documentation is top-notch, and the performance has exceeded our expectations.",
      author: "David Park",
      role: "Lead Developer, CodeBase",
      rating: 5,
      avatar: "DP"
    },
    {
      id: 5,
      text: "Game-changer for our workflow. The real-time analytics give us insights we never had before. Highly recommend to any growing team.",
      author: "Lisa Anderson",
      role: "Director of Ops, GrowthLab",
      rating: 5,
      avatar: "LA"
    },
    {
      id: 6,
      text: "Incredible platform with exceptional uptime. The team collaboration features have made remote work so much easier for us.",
      author: "James Rodriguez",
      role: "VP Engineering, CloudTech",
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
        <h1 className="products-title">Choose Your Plan</h1>
        <p className="products-subtitle">
          Flexible pricing that scales with your needs. All plans include a 14-day free trial.
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
                  Get Started
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
            <h2 className="section-title">Loved by thousands of teams</h2>
            <p className="section-subtitle">
              See what our customers have to say about their experience
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
