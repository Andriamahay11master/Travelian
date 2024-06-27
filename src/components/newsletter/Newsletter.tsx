import React from 'react'
import './newsletter.scss'

interface NewsletterProps {
    title: string
    description?: string
}
export default function Newsletter({title, description} : NewsletterProps) {
    return (
        <div className="newsletter">
            <div className="newsletter-wrapper">
                <div className="newsletter-col">
                    <h2 className="title-h2">{title}</h2>
                    {description && <p>{description}</p>}
                </div>
                <div className="newsletter-col">
                    <form action="#">
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="input-forms" name="email" id="email" placeholder='Enter your email'/>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary" type="submit">Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}