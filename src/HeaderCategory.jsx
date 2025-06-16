function HeaderCategory({category, targetCategory})
{
    return (
            <li className="headerCategory">
                <button className="headerCategoryButton" onClick={targetCategory}>
                    {category}
                </button></li>

    )
}

export default HeaderCategory;