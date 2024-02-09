import { useLocation, useNavigate } from 'react-router-dom';

export const useNavigateWithUtm = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (url: string, replace?: boolean) => {
    navigate(`${url}${location.search}`, { replace });
  };
};

export type NavigateType = ReturnType<typeof useNavigateWithUtm>;
