export function Button({ children, onClick, className = '', variant = 'default', disabled }) {
  const base = 'px-4 py-2 rounded text-white font-semibold';
  const style = variant === 'outline'
    ? 'bg-white border border-gray-300 text-gray-800'
    : 'bg-blue-600 hover:bg-blue-700';
  const disabledStyle = disabled ? 'opacity-50 cursor-not-allowed' : '';
  return (
    <button
      onClick={onClick}
      className={`${base} ${style} ${className} ${disabledStyle}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}