export type GlassPaneProps = {
    children: React.ReactNode,
    className?: string;
};

const GlassPane = ({ children, className = ''}: GlassPaneProps) => (
        <div className={
            `glass rounded-xl border-2 border-purple-900 ${className}`
        }>
            {children}
        </div>
    );

export default GlassPane;
