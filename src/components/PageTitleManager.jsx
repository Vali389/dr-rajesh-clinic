import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const routeTitles = {
  '/': 'Dr. Rajesh Clinic | Pain Management, Palliative Care & Wellness Therapy',
  '/about': 'About Dr. Vasam Rajesh Kumar | Interventional Pain Specialist',
  '/services': 'Treatments & Services | Dr. Rajesh Clinic',
  '/gallery': 'Clinical Gallery & Facilities | Dr. Rajesh Clinic',
  '/blog': 'Pain Care Blog & Insights | Dr. Rajesh Clinic',
  '/blogs': 'Pain Care Blog & Insights | Dr. Rajesh Clinic',
  '/contact': 'Book Consultation | Dr. Rajesh Clinic'
};

export default function PageTitleManager() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (routeTitles[path]) {
      document.title = routeTitles[path];
    } else if (path.startsWith('/services/')) {
      document.title = 'Treatment Details | Dr. Rajesh Clinic';
    } else if (path.startsWith('/blog/')) {
      document.title = 'Clinical Article | Dr. Rajesh Clinic';
    } else {
      document.title = 'Dr. Rajesh Clinic | Pain Management, Palliative Care & Wellness Therapy';
    }
  }, [location]);

  return null;
}
