import React from 'react'
import './newsletter.scss'

interface NewsletterProps {
    title: string
    description?: string
}
export default function Newsletter({title, description} : NewsletterProps) {
    return (
        <div className="newsletter">
            <div className="newlstter-wrapper">
                <div className="newsletter-col">
                    <h2 className="title-h2">{title}</h2>
                    {description && <p>{description}</p>}
                </div>
                <div className="newsletter-col">
                    <form action="#">
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" placeholder='Enter your email'/>
                        </div>
                        <div className="form-group">
                            <button type="submit">Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}