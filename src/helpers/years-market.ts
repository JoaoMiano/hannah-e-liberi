/**
 * 
 * @param foundationDate - Date object or string (e.g., "1995-10-25")
 * @returns The number of full years since foundation
 */
export const getCompanyAge = (): number => {
  const today = new Date();
  const birthDate = new Date(process.env.NEXT_PUBLIC_DATE_FOUNDATION_COMPANY!);

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();


  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
};