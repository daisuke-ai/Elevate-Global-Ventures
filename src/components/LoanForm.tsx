import React, { useState } from 'react';
import { Building2, X } from 'lucide-react';

interface LoanFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoanForm: React.FC<LoanFormProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    propertyAddress: '',
    purchasePrice: '',
    loanAmount: '',
    propertyType: 'singleFamily',
    investmentStrategy: 'buyAndHold',
    timeframe: 'immediate',
    creditScore: '700+',
    name: '',
    email: '',
    phone: '',
    additionalInfo: ''
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
          'form-name': 'loan-inquiry',
          ...formData
        }).toString()
      });

      if (response.ok) {
        alert('Thank you for your loan inquiry! We will contact you soon.');
        onClose();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      alert('Sorry, there was an error submitting your form. Please try again.');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
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
            <Building2 className="h-6 w-6 text-blue-600 mr-2" />
            <h2 className="text-2xl font-bold text-darkblue-900">Investment Loan Application</h2>
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
            {step === 1 && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-darkblue-900">Property Information</h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Property Address
                  </label>
                  <input
                    type="text"
                    name="propertyAddress"
                    value={formData.propertyAddress}
                    onChange={handleInputChange}
                    required
                    className="input-field"
                    placeholder="Enter property address"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Purchase Price
                    </label>
                    <input
                      type="number"
                      name="purchasePrice"
                      value={formData.purchasePrice}
                      onChange={handleInputChange}
                      required
                      className="input-field"
                      placeholder="$"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Loan Amount Needed
                    </label>
                    <input
                      type="number"
                      name="loanAmount"
                      value={formData.loanAmount}
                      onChange={handleInputChange}
                      required
                      className="input-field"
                      placeholder="$"
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-darkblue-900">Investment Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Property Type
                    </label>
                    <select
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleInputChange}
                      required
                      className="input-field"
                    >
                      <option value="singleFamily">Single Family</option>
                      <option value="multiFamily">Multi Family</option>
                      <option value="commercial">Commercial</option>
                      <option value="land">Land</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Investment Strategy
                    </label>
                    <select
                      name="investmentStrategy"
                      value={formData.investmentStrategy}
                      onChange={handleInputChange}
                      required
                      className="input-field"
                    >
                      <option value="buyAndHold">Buy and Hold</option>
                      <option value="fix">Fix and Flip</option>
                      <option value="wholesale">Wholesale</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Timeframe
                    </label>
                    <select
                      name="timeframe"
                      value={formData.timeframe}
                      onChange={handleInputChange}
                      required
                      className="input-field"
                    >
                      <option value="immediate">Immediate</option>
                      <option value="30days">Within 30 Days</option>
                      <option value="60days">Within 60 Days</option>
                      <option value="90days">Within 90 Days</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Credit Score Range
                    </label>
                    <select
                      name="creditScore"
                      value={formData.creditScore}
                      onChange={handleInputChange}
                      required
                      className="input-field"
                    >
                      <option value="700+">700+</option>
                      <option value="650-699">650-699</option>
                      <option value="600-649">600-649</option>
                      <option value="below600">Below 600</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-darkblue-900">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
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
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Additional Information
                    </label>
                    <textarea
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleInputChange}
                      rows={4}
                      className="input-field"
                      placeholder="Any additional details about your investment plans..."
                    ></textarea>
                  </div>
                </div>
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
                  Submit Application
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
