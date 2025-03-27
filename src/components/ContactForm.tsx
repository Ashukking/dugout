
import { useState } from 'react';
import { Calendar, Clock, Users, Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    groupSize: '',
    activity: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Booking request submitted successfully! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      groupSize: '',
      activity: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background gradient circles */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-sport-steam/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-sport-food/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-primary">Book Your Experience</h2>
                <p className="text-muted-foreground text-lg">
                  Ready for some action? Book your visit to GameZone today and experience the thrill!
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Flexible Scheduling</h3>
                    <p className="text-muted-foreground">
                      Choose a date and time that works for you. We're open 7 days a week.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Extended Hours</h3>
                    <p className="text-muted-foreground">
                      Open from 10:00 AM to 11:00 PM on weekdays, and until 1:00 AM on weekends.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Group Discounts</h3>
                    <p className="text-muted-foreground">
                      Special rates for groups of 6 or more. Perfect for birthday parties and events.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6 md:p-8 animate-scale-in">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium mb-1">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium mb-1">
                      Preferred Time
                    </label>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="groupSize" className="block text-sm font-medium mb-1">
                      Group Size
                    </label>
                    <input
                      type="number"
                      id="groupSize"
                      name="groupSize"
                      value={formData.groupSize}
                      onChange={handleChange}
                      min="1"
                      className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="activity" className="block text-sm font-medium mb-1">
                    Preferred Activity
                  </label>
                  <select
                    id="activity"
                    name="activity"
                    value={formData.activity}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                    required
                  >
                    <option value="">Select an activity</option>
                    <option value="cricket">Cricket</option>
                    <option value="pickleball">Pickle Ball</option>
                    <option value="football">Football</option>
                    <option value="trampoline">Trampoline</option>
                    <option value="dance">Dance Floor</option>
                    <option value="food">Food Court Only</option>
                    <option value="steam">Steam Room</option>
                    <option value="multiple">Multiple Activities</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Additional Requests
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                  ></textarea>
                </div>
                
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white font-medium px-6 py-3 rounded-lg transition-all flex items-center justify-center gap-2 hover:shadow-lg"
                  >
                    <Send size={18} />
                    Book Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
