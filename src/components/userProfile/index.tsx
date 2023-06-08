export const UserProfile = (): JSX.Element => {
    return (
        <div className="flex items-center gap-2">
            <img className="w-8 h-8" src="../../src/assets/img/user-example.svg" alt="user-profile" />
            <p className="text-sm font-medium text-grey1 font-inter">Samuel Leão</p>
        </div>
    );
};
