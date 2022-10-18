package com.adobe.aem.spa.react.core.models;


import org.apache.sling.api.SlingHttpServletRequest;
import com.adobe.cq.export.json.ComponentExporter;
import org.apache.sling.models.annotations.Exporter;
import com.adobe.cq.export.json.ExporterConstants;
import org.apache.sling.models.annotations.Model;


@Model(adaptables = SlingHttpServletRequest.class,
        adapters = {ComponentExporter.class},
        resourceType = NewsletterModel.RESOURCE_TYPE)
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class NewsletterModel implements ComponentExporter {
    protected static final String RESOURCE_TYPE = "spa-react-v3/components/newsletter";



    public String getExportedType() {
        return RESOURCE_TYPE;
    }
}
