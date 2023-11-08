

const Faq = () => {
    return (
      <div className="mt-24 px-4">
        <h1 className="text-xl font-bold text-center my-12">FAQs</h1>
        <div className="collapse collapse-plus bg-base-200 mb-6">
          <input type="radio" name="my-accordion-3" checked="checked" />
          <div className="collapse-title text-xl font-medium">
            What schools does For Kids Co. service?
          </div>
          <div className="collapse-content">
            <p>
              The Brindishe Federation (Brindishe Lee, Manor & Green) Colfe’s
              Heath House Wingfield St. Mathew’s Academy Trinity Baring Road
              School All Saints John Ball St. Margaret’s
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200 mb-6">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Can For Kids Co. support children with additional needs?
          </div>
          <div className="collapse-content">
            <p>
              Yes, our staff are qualified in SEN, visual/hearing impairment and
              physical disability. Our club is fully accessible and we work hard
              to ensure inclusivity at all times. We recognise and celebrate
              difference and encourage the children to understand that ALL
              children are unique in their own beautiful ways.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200 mb-6">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            How does For Kids Co. manage infection control regarding Covid-19?
          </div>
          <div className="collapse-content">
            <p>
              We have a robust C-19 risk assessment in place (available upon
              request) OR DOWNLOAD HERE?. All staff are flow tested and
              vaccinated. The children are temperature checked upon entry to the
              setting. Children are taught to wash hands effectively and outdoor
              play is encouraged as much as possible.
            </p>
          </div>
        </div>
      </div>
    );
};

export default Faq;