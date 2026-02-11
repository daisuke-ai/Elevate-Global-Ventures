import React, { useState } from 'react';
import { Home, X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PropertyFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PropertyForm: React.FC<PropertyFormProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    address: '',
    city: '',
    state: '',
    zipCode: '',
    yearBuilt: '',
    squareFootage: '',
    bedrooms: '3',
    bathrooms: '2',
    condition: 'good',
    name: '',
    email: '',
    phone: '',
    notes: '',
    marketingConsent: false,
    nonMarketingConsent: false
  });

  if (!isOpen) return null;

  const totalSteps = 3;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'property-inquiry',
          ...formData
        }).toString()
      });

      if (response.ok) {
        alert('Thank you for your submission! We will contact you soon.');
        onClose();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      alert('Sorry, there was an error submitting your form. Please try again.');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData(prev => ({
      ...prev,
      [name]: newValue
    }));
  };

  const renderProgressBar = () => (
    <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
      <div 
        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
        style={{ width: `${(step / totalSteps) * 100}%` }}
      ></div>
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <div className="flex items-center">
            <Home className="h-6 w-6 text-blue-600 mr-2" />
            <h2 className="text-2xl font-bold text-darkblue-900">Get Your Cash Offer</h2>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6">
          {renderProgressBar()}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <input type="hidden" name="form-name" value="property-inquiry" />
            <input type="hidden" name="bot-field" />
            
            {step === 1 && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-darkblue-900">Property Address</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Street Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="input-field text-gray-900"
                      placeholder="Enter your street address"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="input-field text-gray-900"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        State
                      </label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        required
                        className="input-field text-gray-900"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        ZIP Code
                      </label>
                      <input
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        required
                        className="input-field text-gray-900"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-darkblue-900 mb-4">Property Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Year Built
                    </label>
                    <input
                      type="number"
                      name="yearBuilt"
                      value={formData.yearBuilt}
                      onChange={handleInputChange}
                      required
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Square Footage
                    </label>
                    <input
                      type="number"
                      name="squareFootage"
                      value={formData.squareFootage}
                      onChange={handleInputChange}
                      required
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Bedrooms
                    </label>
                    <select 
                      name="bedrooms" 
                      value={formData.bedrooms}
                      onChange={handleInputChange}
                      required 
                      className="input-field"
                    >
                      {[1,2,3,4,5,6].map(num => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                      <option value="7+">7+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Bathrooms
                    </label>
                    <select 
                      name="bathrooms"
                      value={formData.bathrooms}
                      onChange={handleInputChange}
                      required 
                      className="input-field"
                    >
                      {[1,1.5,2,2.5,3,3.5,4].map(num => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                      <option value="4+">4+</option>
                    </select>
                  </div>
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Property Condition
                    </label>
                    <select 
                      name="condition"
                      value={formData.condition}
                      onChange={handleInputChange}
                      required 
                      className="input-field"
                    >
                      <option value="excellent">Excellent</option>
                      <option value="good">Good</option>
                      <option value="fair">Fair</option>
                      <option value="needsWork">Needs Work</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-darkblue-900 mb-4">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="input-field"
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Additional Notes
                    </label>
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      rows={4}
                      className="input-field"
                      placeholder="Any additional information about your property..."
                    ></textarea>
                  </div>
                </div>

                {/* Consent Checkboxes */}
                <div className="space-y-3 pt-4">
                  <div className="flex items-start">
                    <input
                      id="marketingConsent"
                      name="marketingConsent"
                      type="checkbox"
                      checked={formData.marketingConsent}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-1 mr-3"
                    />
                    <label htmlFor="marketingConsent" className="text-sm text-gray-600">
                      I consent to receive marketing text messages (e.g., promotions, offers, investment opportunities) from Elevate Global Ventures Group at the phone number provided. Consent is not a condition of any purchase. Message frequency varies. Msg & data rates may apply. Reply HELP for help, STOP to cancel.
                    </label>
                  </div>
                  <div className="flex items-start">
                    <input
                      id="nonMarketingConsent"
                      name="nonMarketingConsent"
                      type="checkbox"
                      checked={formData.nonMarketingConsent}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-1 mr-3"
                    />
                    <label htmlFor="nonMarketingConsent" className="text-sm text-gray-600">
                      I consent to receive non-marketing text messages from Elevate Global Ventures Group, including property offer updates, appointment reminders, and cash offer status notifications. Msg & data rates may apply. Reply HELP for help, STOP to opt out. Consent is not a condition of any purchase.
                    </label>
                  </div>
                </div>

                {/* Terms Link */}
                <div className="pt-2 text-sm">
                  <Link to="/privacy-policy" className="text-blue-600 hover:underline">
                    Privacy Policy
                  </Link>
                  <span className="mx-2 text-gray-400">|</span>
                  <Link to="/terms-and-conditions" className="text-blue-600 hover:underline">
                    Terms of Service
                  </Link>
                </div>

                <p className="text-xs text-gray-500 mt-3">
                  By providing your phone number and checking the consent boxes above, you provide your prior express written consent to receive automated text messages from Elevate Global Ventures Group at the number provided. This consent is not required to make a purchase.
                </p>
              </div>
            )}

            <div className="flex justify-between pt-6">
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="btn-secondary"
                >
                  Previous
                </button>
              )}
              {step < totalSteps ? (
                <button
                  type="button"
                  onClick={() => setStep(step + 1)}
                  className="btn-primary ml-auto"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="btn-primary ml-auto"
                >
                  Get Your Cash Offer
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};